import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Direct contact to the professionals',
    description:
      'Seamless access to connect directly with industry professionals.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Safe and Secured',
    description:
      'Rest assured, BuildMastersHub prioritizes safety by rigorously vetting all construction professionals before their inclusion on the platform.',
    icon: LockClosedIcon,
  },
  {
    name: 'Easy to use',
    description:
      'Built for simplicity, ensuring a user-friendly experience for all. Both clients and construction professionals can easily navigate the platform to meet their needs.',
    icon: ArrowPathIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="Second_Title ">
                    Our Strategy is very personalized
            to meet your needs construction
                        needs
          </p>
          <p className="text">
          An intuitive web platform connecting foremen, construction workers, and clients with personalized strategies meeting diverse construction needs
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="secondtext">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


