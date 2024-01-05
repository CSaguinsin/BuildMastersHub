import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import LightModeLogo from '../assets/logo/Light_Mode.png'
import "../Style.css"


const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '/about-us', current: false },
  { name: 'Contact Us', href: '/contact-us', current: false },
  { name: 'Register Here (Magparehistro dito)', href: 'https://buildmastershub-form.vercel.app/', target: "_blank", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white" style={{ paddingTop: '20px' }}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <img
                className="sm:w-35 h-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40 "
                src={LightModeLogo}
                alt="Your Company"
              />
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-block sm:hidden p-2 text-black-400 hover:bg-black-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
              {/* Navigation Links */}
              <div className="hidden sm:flex flex-grow justify-end space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'text-black' : 'text-black hover:bg-black hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Mobile view */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar;