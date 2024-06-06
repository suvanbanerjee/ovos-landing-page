import Image from 'next/image';
import core1 from '@/public/images/core1.jpeg';
import core2 from '@/public/images/core2.jpeg';
import core3 from '@/public/images/core3.jpeg';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCommentAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons';

export default function Teams() {
  return (
    <section className="relative" data-aos="zoom-y-out" data-aos-delay="150">
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-3xl text-black font-extrabold md:text-4xl">Say Hello to Our Team</h2>
            <p className="text-gray-600 text-xl lg:w-8/12 lg:mx-auto"> Open Voice OS is maintained by a small team of developers and lots of contributors. </p>
          </div>
          <div className="grid gap-12 items-center md:grid-cols-3">
            <div className="space-y-4 text-center">
              <Image className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                src={core2} alt="core" width="640" height="805" />
              <div>
                <h4 className="text-2xl font-bold">Daniel McKnight</h4>
                <span className="block text-sm text-gray-500">Code Wrangler / Maintainer OVOS Core</span>
              </div>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/daniel-mcknight" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 text-xl" />
                </a>
                <a href="https://matrix.to/#/@daniel:matrix.org" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faCommentAlt} className="text-green-600 text-xl" />
                </a>
                <a href="https://github.com/NeonDaniel" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-green-600 text-xl" />
                </a>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <Image className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
              src={core1} alt="man" loading="lazy" width="1000" height="667" />
              <div>
                <h4 className="text-2xl font-bold">Casimiro Ferreira</h4>
                <span className="block text-sm text-gray-500">Code Wrangler / Maintainer OVOS Core</span>
              </div>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/casimiro-ferreira" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 text-xl" />
                </a>
                <a href="https://matrix.to/#/@casimiro:matrix.org" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faCommentAlt} className="text-green-600 text-xl" />
                </a>
                <a href="https://github.com/JarbasAl" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-green-600 text-xl" />
                </a>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <Image className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
              src={core3} alt="woman" loading="lazy" width="1000" height="667" />
              <div>
                <h4 className="text-2xl font-bold">Peter Steenbergen</h4>
                <span className="block text-sm text-gray-500">Hardware Hacker / Maintainer OVOS Images</span>
              </div>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/peter-steenbergen" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 text-xl" />
                </a>
                <a href="https://matrix.to/#/@peter:matrix.org" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faCommentAlt} className="text-green-600 text-xl" />
                </a>
                <a href="https://github.com/j1nx" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-green-600 text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}