'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // Close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return
      setMobileNavOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // Close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-gray-900 dark:text-gray-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/* Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white dark:bg-stone-900"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li>
              <Link href="/downloads" className="flex font-medium w-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2 justify-center" onClick={() => setMobileNavOpen(false)}>Downloads</Link>
            </li>
            <li>
              <Link href="https://openvoiceos.github.io/ovos-technical-manual" className="flex font-medium w-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2 justify-center" onClick={() => setMobileNavOpen(false)}>Documentation</Link>
            </li>
            <li>
              <Link href="https://github.com/OpenVoiceOS/OpenVoiceOS/discussions" className="flex font-medium w-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2 justify-center" onClick={() => setMobileNavOpen(false)}>Discussion</Link>
            </li>
            <li>
              <Link href="/team" className="flex font-medium w-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2 justify-center" onClick={() => setMobileNavOpen(false)}>Team</Link>
            </li>
            <li>
              <Link href="/blog" className="flex font-medium w-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2 justify-center" onClick={() => setMobileNavOpen(false)}>Blogs</Link>
            </li>
            <li>
              <Link href="/" className="btn-sm text-gray-200 bg-gray-900 dark:text-gray-100 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 w-full my-2" onClick={() => setMobileNavOpen(false)}>
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  )
}