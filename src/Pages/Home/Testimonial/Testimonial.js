import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.jpg';
import people3 from '../../../assets/images/people3.jpg';
import Review from './Review';


const Testimonial = () => {

    const reviews = [
        {
            _id: 1, 
            name: "Abu Bakr",
            img: people1,
            review: 'Good Service',
            location: 'Rahmatpur'
        },
        {
            _id: 2, 
            name: 'Salman Farsi',
            img: people2,
            review: 'Service is fine',
            location: 'Akua'
        },
        {
            _id: 3, 
            name: 'Abu Ubyida',
            img: people3,
            review: 'Good Environment',
            location: 'Charpara'
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className="text-4xl">What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;