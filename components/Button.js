"use client"

function Button({ children, variant = "primary", className = "", ...props }) {
  const baseClasses = "inline-flex items-center justify-center px-5 py-2.5 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"
  
  const variantClasses = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    outline: "bg-transparent text-indigo-600 border border-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-500",
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
