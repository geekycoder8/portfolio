import React from "react";
import NeoOne from '../assets/images/Neo-One-Mockup.jpg';
import NNB from '../assets/images/NNB-Mockup.jpg';
import PaulsFashion from '../assets/images/Pauls-Fashion-Mockup.jpg';
import Qwell from '../assets/images/Qwell-Mockup.jpg';
import Aladdin from '../assets/images/Aladdin-HRMS-Mockup.jpg';
import LeelasKitchen from '../assets/images/Leelas-Kitchen-Mockup.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://landing.myneoone.com/" target="_blank" rel="noreferrer"><img src={NeoOne} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://landing.myneoone.com/" target="_blank" rel="noreferrer"><h2>Neo one</h2></a>
                <p>
                    NEO ONE, developed by My NEO Group, is an all-in-one financial platform that seamlessly blends traditional banking with cryptocurrency management. It allows users to manage both personal and business finances in one app, connect accounts from over 3,500 global banks, and access powerful financial tools like real-time insights, transaction visualization, and geographic mapping. The platform supports more than 120 cryptocurrencies and offers a dedicated Crypto Card usable with Google Pay. NEO ONE also features its own utility token, NEO CREDIT (NRT), and provides access to instant loans and exclusive partner rewards. With top-tier security, including two-factor authentication and 24/7 in-app support, NEO ONE aims to simplify and modernize the way users interact with money.
                </p>
            </div>
             <div className="project">
                <a href="https://apps.apple.com/sa/app/aladdin-hrms/id6741014553?uo=2" target="_blank" rel="noreferrer"><img src={Aladdin} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://apps.apple.com/sa/app/aladdin-hrms/id6741014553?uo=2" target="_blank" rel="noreferrer"><h2>Aladdin HRMS</h2></a>
                <p>
                   Aladdin HRMS is a user-friendly mobile application designed to streamline human resource management tasks for both employees and HR teams. Available for iOS devices, the app offers essential features such as one-tap check-in and check-out for attendance tracking, comprehensive views of daily, weekly, and monthly attendance records, a leave management system for applying and monitoring leave requests, and instant access to digital pay slips. 
                </p>
            </div>
             
            <div className="project">
                <a href="https://nourish-and-bloom-market.square.site/" target="_blank" rel="noreferrer"><img src={NNB} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://nourish-and-bloom-market.square.site/" target="_blank" rel="noreferrer"><h2>Nourish & Bloom</h2></a>
                <p>
                    Nourish + Bloom Market is the world’s first Black-owned, autonomous grocery store, pioneering a frictionless shopping experience through AI and smart technology. Operating 24/7, the market offers a wide range of locally sourced products, including fresh produce, meats, baked goods, dairy, and prepared meals, all free from GMOs and high-fructose corn syrup. Customers can shop by simply scanning a QR code, selecting their items, and exiting without traditional checkout lines, thanks to advanced vision and voice AI systems. Additionally, the market employs robotic delivery services, enhancing convenience for nearby residents. With its commitment to accessibility, Nourish + Bloom integrates EBT-enabled payment options, ensuring equitable access to healthy food choices. This innovative approach not only streamlines the grocery shopping experience but also addresses food deserts by providing continuous access to nutritious options.
                </p>
            </div>
            <div className="project">
                <a href="http://paulsfashion.com/" target="_blank" rel="noreferrer"><img src={PaulsFashion} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://paulsfashion.com/" target="_blank" rel="noreferrer"><h2>Paul's Fashion</h2></a>
                <p>
                    Paul's Fashion is an online clothing web application that offers customers the ability to browse, select, purchase, and receive a wide range of clothing products. This app provides an interactive and user-friendly shopping experience, replicating many aspects of traditional in-store shopping while adding the benefits of online convenience and accessibility.
                </p>
            </div>
             <div className="project">
                <a href="https://www.leelaskitchen.co.uk/" target="_blank" rel="noreferrer"><img src={LeelasKitchen} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.leelaskitchen.co.uk/" target="_blank" rel="noreferrer"><h2>Leela's Kitchen</h2></a>
                <p>
                    Leela's Kitchen, based on the Isle of Man, is a multi-award-winning culinary venture renowned for its authentic Indian cuisine and premium spice blends. Founded by chef Kumar Menon, the business offers a variety of services, including weekly thali deliveries featuring vegetarian, chicken, mixed meat, and seafood options, all crafted with freshly ground spices and accommodating various dietary requirements. Beyond meal deliveries, Leela's Kitchen provides immersive cookery workshops and private dinner parties, allowing participants to delve into traditional Indian cooking techniques. Their product line boasts award-winning spice mixes, such as the Onion Bhaji Mix and Vindaloo Curry Powder, alongside specialty teas and coffees like the Chai-licious Masala Chai and Monsoon Malabar coffee beans. Committed to sustainability, the business utilizes biodegradable packaging and sources ingredients locally whenever possible. Leela's Kitchen not only delivers flavorful meals but also fosters a deeper appreciation for Indian culinary traditions through its diverse offerings.
                </p>
            </div>
           <div className="project">
                <a href="https://qwell.com/" target="_blank" rel="noreferrer"><img src={Qwell} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://qwell.com/" target="_blank" rel="noreferrer"><h2>Qwell</h2></a>
                <p>
                    Qwell is a free, patient-centric healthcare platform designed to simplify the process of finding and booking medical appointments. Operating primarily in New York City, Qwell connects users with a curated network of trusted, vetted healthcare providers across various specialties, including primary care, mental health, dermatology, cardiology, and wellness services . The platform offers both in-person and virtual visits, ensuring flexibility and convenience for patients. 
                </p>
            </div>
            
           
        </div>
    </div>
    );
}

export default Project;