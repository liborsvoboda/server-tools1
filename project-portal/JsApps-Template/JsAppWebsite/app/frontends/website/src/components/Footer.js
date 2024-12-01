import React from 'react'

const Footer = () => {
  return (
      <footer className="py-4 text-purple-400 bg-fuchsia-100">
          <div className="flex items-center justify-between px-4 mx-auto  sm:px-4 lg:px-8">
          <a href="/Privacy" className="text-purple-400 " target="_blank" rel="noreferrer">
                  Privacy Policy
              </a>
              <p>&copy; 2023 GoBridge</p>
              <a href="/CodeOfConduct" className="text-purple-400 " target="_blank" rel="noreferrer">
                  Code of Conduct
              </a>
      </div>
   </footer>
)};

export default Footer