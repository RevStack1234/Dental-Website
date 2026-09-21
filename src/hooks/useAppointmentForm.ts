import { useState } from 'react'
import type { FormEvent } from 'react'
import { treatments } from '../data/treatments'

export type AppointmentFormData = {
  name: string
  phone: string
  email: string
  date: string
  treatment: string
  subTreatment: string
  description: string
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const EMPTY_FORM: AppointmentFormData = {
  name: '',
  phone: '',
  email: '',
  date: '',
  treatment: '',
  subTreatment: '',
  description: '',
}

export function useAppointmentForm() {
  const [formData, setFormData] = useState<AppointmentFormData>(EMPTY_FORM)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const updateField = (field: keyof AppointmentFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const setTreatment = (treatment: string) => {
    setFormData((prev) => ({ ...prev, treatment, subTreatment: '' }))
  }

  const setSubTreatment = (subTreatment: string) => updateField('subTreatment', subTreatment)

  const setDate = (value: string) => {
    updateField('date', value)
    if (status === 'error' && errorMessage.includes('date')) {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  const reset = () => {
    setFormData(EMPTY_FORM)
    setStatus('idle')
    setErrorMessage('')
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (status === 'submitting') return

    const nameStr = formData.name.trim()
    if (nameStr.length < 3 || !/^[a-zA-Z\s]+$/.test(nameStr)) {
      setStatus('error')
      setErrorMessage('Name must be at least 3 characters long and contain only letters.')
      return
    }

    const phoneStr = formData.phone.trim()
    if (!/^[6-9]\d{9}$/.test(phoneStr)) {
      setStatus('error')
      setErrorMessage('Please enter a valid 10-digit Indian mobile number.')
      return
    }

    const emailStr = formData.email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address.')
      return
    }

    if (!formData.date) {
      setStatus('error')
      setErrorMessage('Please select a preferred date & time.')
      return
    }

    // Compare YYYY-MM-DDTHH:mm strings (no seconds) so a valid 5-min slot is never
    // falsely rejected because the wall-clock seconds crept past the selection.
    const nowStr = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 16)   // "YYYY-MM-DDTHH:mm"
    if (formData.date < nowStr) {
      setStatus('error')
      setErrorMessage('Booking date and time cannot be in the past.')
      return
    }

    if (!formData.treatment) {
      setStatus('error')
      setErrorMessage('Please select a treatment required.')
      return
    }

    const selectedTreatmentData = treatments.find((t) => t.title === formData.treatment)
    if (selectedTreatmentData?.subtypes && selectedTreatmentData.subtypes.length > 0) {
      if (!formData.subTreatment) {
        setStatus('error')
        setErrorMessage('Please select a specific treatment option.')
        return
      }
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const finalTreatment = formData.subTreatment
        ? `${formData.treatment} - ${formData.subTreatment}`
        : formData.treatment

      const payload = { ...formData, treatment: finalTreatment }

      const res = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      let data: { error?: string } = {}
      try {
        data = await res.json()
      } catch {
        data = {}
      }

      if (!res.ok) {
        throw new Error(data.error || "We couldn't process your request at this moment. Please try again or contact us directly.")
      }

      setStatus('success')
      setFormData(EMPTY_FORM)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : "We couldn't process your request at this moment. Please try again or contact us directly.",
      )
    }
  }

  return { formData, updateField, setTreatment, setSubTreatment, setDate, status, errorMessage, reset, submit }
}
