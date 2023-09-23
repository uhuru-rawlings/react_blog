import React from 'react'

export const Footer = () => {
  const year = new Date()
  return (
    <div className="container">
        <p className="text-center">copyright &copy; {year.getFullYear} | all rights reserved.</p>
    </div>
  )
}
