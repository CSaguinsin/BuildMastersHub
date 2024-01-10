import { CloudArrowUpIcon, LockClosedIcon, ArrowPathIcon } from '@heroicons/react/20/solid'
import Screenshot from '../assets/Graphic/screenshot.png'
import screen from '../assets/Graphic/screen.png'

export default function WhyUseThis() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="Second_Title">Our Mission and Vision in <br></br> BuildMastersHub</h1>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={screen}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <h1 className='Title'>Mission</h1>
                <br></br>
              <p className='secondtext'>
To empower construction professionals and foremen by providing a seamlessly accessible platform that fosters connections with prospective clients, promoting growth and success in the industry.
              </p>
              <br></br>
              <h1 className='Title'>Vision</h1>
                <br></br>
              <p className='secondtext'>
              To revolutionize the construction landscape with a user-friendly and comprehensive platform, serving as the go-to hub for professionals and clients, redefining collaboration and efficiency in the construction realm.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="secondtext">Direct contact to the professionals.</strong><p className='secondtext'>Seamless access to connect directly with industry professionals.
                    blanditiis ratione.</p>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="secondtext">Safe and Secured.</strong><p className='secondtext'> Rest assured, BuildMastersHub prioritizes safety by rigorously vetting all construction professionals before their inclusion on the platform.</p>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="secondtext">Easy to use.</strong> <p className='secondtext'>Built for simplicity, ensuring a user-friendly experience for all. Both clients and construction professionals can easily navigate the platform to meet their needs.</p>
                  </span>
                </li>
              </ul>
              <br></br>
              <p className='secondtext'>
              BuildMasterHub's mission is to empower construction professionals and foremen through a seamless platform, fostering connections with prospective clients for industry growth. Our vision is to revolutionize construction by providing a user-friendly hub, redefining collaboration and efficiency. Offering direct contact to vetted professionals, ensuring safety and ease of use for all involved.
              </p>
              <br></br>
              <h2 className="Second_Title">Don't know any foreman or construction worker?</h2>
              <p className="secondtext">
              Discover a user-friendly platform at BuildMasterHub to easily connect with vetted construction professionals and foremen. Even without existing contacts in the industry, our platform ensures direct access to these experts, offering a safe and efficient way to meet your construction needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
