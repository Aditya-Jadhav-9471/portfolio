import React from "react";

import {
FaLinkedin,
FaInstagram,
FaEnvelope,
FaGithub,
} from "react-icons/fa";

const Footer = () => {

const scrollToSection = (id) => {

document
.getElementById(id)
?.scrollIntoView({
behavior: "smooth",
block: "start",
});

};

const navLinks = [
{
name: "About",
id: "about",
},

{
name: "Skills",
id: "skills",
},

{
name: "Experience",
id: "experience",
},

{
name: "Projects",
id: "work",
},

{
name: "Education",
id: "education",
},

{
name: "Contact",
id: "contact",
},
];

const socials = [

{
icon: <FaLinkedin />,
url:
"https://www.linkedin.com/in/aditya9471/",
},

{
icon: <FaInstagram />,
url:
"https://www.instagram.com/aadii_9471/",
},

{
icon: <FaGithub />,
url:
"https://github.com/Aditya-Jadhav-9471",
},

{
icon: <FaEnvelope />,
url:
"mailto:adityajadhav97349@gmail.com",
},

];

return (

<footer
className="
relative
mt-20
border-t
border-[#8245ec20]
bg-[#0b0b0f]
"
>

<div
className="
absolute
top-0
left-0
w-full
h-[1px]
bg-gradient-to-r
from-transparent
via-[#8245ec]
to-transparent
"
/>

<div
className="
max-w-7xl
mx-auto
px-[8vw]
py-16
text-center
"
>

{/* Name */}

<h2
className="
text-4xl
font-black
text-white
"
>
Aditya

<span
className="
text-[#8245ec]
"
>
{" "}Jadhav
</span>

</h2>

{/* Tagline */}

<p
className="
mt-4
text-gray-400
max-w-xl
mx-auto
leading-8
"
>
Building modern software and
exploring cloud, automation
and scalable systems.
</p>

{/* Navigation */}

<div
className="
flex
flex-wrap
justify-center
gap-6
mt-10
"
>

{navLinks.map((link) => (

<button
key={link.id}
onClick={() =>
scrollToSection(
link.id
)
}
className="
text-gray-400
hover:text-[#8245ec]
transition
"
>
{link.name}
</button>

))}

</div>

{/* Social */}

<div
className="
flex
justify-center
gap-5
mt-10
"
>

{socials.map(
(item, index) => (

<a
key={index}
href={item.url}
target="_blank"
rel="noreferrer"
className="
w-12
h-12
rounded-full
bg-[#161616]
border
border-[#2b2b2b]
flex
items-center
justify-center
text-xl
text-gray-300
hover:border-[#8245ec]
hover:text-white
hover:-translate-y-1
transition
"
>

{item.icon}

</a>

)
)}

</div>

<div
className="
mt-10
text-sm
text-gray-500
"
>
© {new Date().getFullYear()}
{" "}
Aditya Jadhav

</div>

</div>

</footer>

);

};

export default Footer;