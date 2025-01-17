import Image from 'next/image';

export default function About() {
    return (
        <div className="container my-5 flex flex-col items-center">


                <Image
                    src="/images/Headshot.jpeg"
                    alt="Headshot"
                    className='rounded-full mb-4 grayscale'
                    width={200}
                    height={200}
                    style={{ objectFit: "cover" }}
                />
                <p className="text-center">
                    Hi there! I&apos;m Chris, an Information Security and Cyber Security professional who&apos;s decided to spread his wings into the world of full stack web development.
                    I&apos;m a graduate of the University of Utah and have returned to participate in the University&apos;s Software Development Coding Bootcamp!
                    I would like to bring my security background and perspective to the world of web development.
                    I&apos;m a lifelong learner who&apos;s always looking for new challenges and opportunities to grow in the tech industry.
                    I&apos;m excited to see where this journey takes me and look forward to putting my new and developing skills to work!
                </p>
        </div>
    );
};