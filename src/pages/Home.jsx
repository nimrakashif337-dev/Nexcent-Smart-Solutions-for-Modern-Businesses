import heroImg from "../assets/hero.png";

import c1 from "../assets/client1.png";
import c2 from "../assets/client2.png";
import c3 from "../assets/client3.png";
import c4 from "../assets/client4.png";
import c5 from "../assets/client5.png";
import c6 from "../assets/client6.png";
import c7 from "../assets/client7.png";

import com1 from "../assets/community1.png";
import com2 from "../assets/community2.png";
import com3 from "../assets/community3.png";

import pixelgrad from "../assets/pixelgrad.png";

import membersIcon from "../assets/members.png";
import clubsIcon from "../assets/clubs.png";
import eventsIcon from "../assets/events.png";
import paymentsIcon from "../assets/payments.png";

import footerIllustration from "../assets/mobile-login.png";
import customerImg from "../assets/customer.png";

import logo1 from "../assets/Logo1.png";

import logo2 from "../assets/Logo2.png";
import logo3 from "../assets/Logo3.png";
import logo4 from "../assets/Logo4.png";
import logo5 from "../assets/Logo5.png";
import logo6 from "../assets/Logo6.png";

import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
              Lessons and insights <br />
              <span className="text-green-600">from 8 years</span>
            </h1>
            <p className="text-gray-500 mt-5 max-w-md mx-auto md:mx-0">
              Where to grow your business as a photographer: site or social media?
            </p>
            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
              Register
            </button>
          </div>

          <div className="flex justify-center">
            <img src={heroImg} alt="Hero" className="w-full max-w-[500px]" />
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-white py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Our Clients</h2>
          <p className="text-gray-500 mt-2">
            We have been working with some Fortune 500+ clients
          </p>

          <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-8 items-center">
            {[c1, c2, c3, c4, c5, c6, c7].map((logo, i) => (
              <img key={i} src={logo} alt="" className="mx-auto h-10 grayscale hover:grayscale-0 transition" />
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Manage your entire community <br /> in a single system
            </h2>
            <p className="text-gray-500 mt-2">Who is Nexcent suitable for?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[com1, com2, com3].map((img, i) => (
              <div key={i} className="border rounded-xl p-6 sm:p-8 text-center hover:shadow-lg transition">
                <img src={img} alt="" className="h-14 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {i === 0 ? "Membership Organisations" : i === 1 ? "National Associations" : "Clubs And Groups"}
                </h3>
                <p className="text-gray-500 mt-3 text-sm">
                  Our membership management software provides full automation of membership renewals and payments.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIXELGRADE */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-14 flex flex-col md:flex-row items-center gap-12">
          <img src={pixelgrad} alt="" className="w-full max-w-[440px]" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#4D4D4D]">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="mt-4 text-[#717171]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
            </p>
            <button className="mt-6 bg-[#4CAF4F] text-white px-8 py-3 rounded hover:bg-green-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col md:flex-row gap-10 justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#4D4D4D]">
              Helping a local <br />
              <span className="text-[#4CAF4F]">business reinvent itself</span>
            </h2>
            <p className="text-[#717171] mt-3">
              We reached here with our hard work and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              [membersIcon, "2,245,341", "Members"],
              [clubsIcon, "46,328", "Clubs"],
              [eventsIcon, "828,867", "Event Bookings"],
              [paymentsIcon, "1,926,436", "Payments"],
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <img src={item[0]} className="w-10" />
                <div>
                  <h3 className="font-bold text-lg text-[#4D4D4D]">{item[1]}</h3>
                  <p className="text-[#717171] text-sm">{item[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-36 flex flex-col md:flex-row gap-12 items-center">
          <img src={customerImg} className="w-[220px] sm:w-[280px] md:w-[326px] rounded-lg shadow" />
          <div>
            <p className="text-[#717171]">
              Maecenas dignissim justo eget nulla rutrum molestie.
            </p>
            <h4 className="text-[#4CAF4F] font-semibold mt-4">Tim Smith</h4>
            <p className="text-sm text-[#89939E]">
              British Dragon Boat Racing Association
            </p>
            <div className="flex gap-4 flex-wrap mt-6">
              {[logo1, logo2, logo3, logo4, logo5, logo6].map((l, i) => (
                <img key={i} src={l} className="h-8" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-white py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-36 grid md:grid-cols-3 gap-8">
          {[blog1, blog2, blog3].map((b, i) => (
            <div key={i}>
              <img src={b} className="rounded-lg w-full h-[260px] object-cover" />
              <div className="bg-white shadow p-6 -mt-16 mx-4 rounded-lg text-center">
                <p className="text-sm text-[#717171]">Caring is the new marketing</p>
                <button className="text-[#4CAF4F] mt-3 font-medium">Readmore →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F7FA] py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#263238] max-w-[700px] mx-auto">
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <button className="mt-8 bg-[#4CAF4F] text-white px-8 py-3 rounded hover:bg-green-600">
          Get a Demo →
        </button>
      </section>

    </main>
  );
}






















// import heroImg from "../assets/hero.png";

// // clients logos (7)
// import c1 from "../assets/client1.png";
// import c2 from "../assets/client2.png";
// import c3 from "../assets/client3.png";
// import c4 from "../assets/client4.png";
// import c5 from "../assets/client5.png";
// import c6 from "../assets/client6.png";
// import c7 from "../assets/client7.png";

// // community icons (3)
// import com1 from "../assets/community1.png";
// import com2 from "../assets/community2.png";
// import com3 from "../assets/community3.png";
// // pixelgrad section2 //
// import pixelgrad from "../assets/pixelgrad.png";

// // Helping a local business reinvent itself //
// import membersIcon from "../assets/members.png";
// import clubsIcon from "../assets/clubs.png";
// import eventsIcon from "../assets/events.png";
// import paymentsIcon from "../assets/payments.png";

// //  site footer //
// import footerIllustration from "../assets/mobile-login.png";

// // Tim Smith//
// import customerImg from "../assets/customer.png";

// import logo1 from "../assets/logo1.png";
// import logo2 from "../assets/logo2.png";
// import logo3 from "../assets/logo3.png";
// import logo4 from "../assets/logo4.png";
// import logo5 from "../assets/logo5.png";
// import logo6 from "../assets/logo6.png";

// // Caring is the new marketing //
// import blog1 from "../assets/blog1.png";
// import blog2 from "../assets/blog2.png";
// import blog3 from "../assets/blog3.png";



// export default function Home() {
//   return (
//     <main className="w-full overflow-x-hidden">

//       {/* ================= HERO SECTION ================= */}
//       <section className="bg-gray-50">
//         <div className="max-w-[1440px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

//           <div>
//             <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
//               Lessons and insights <br />
//               <span className="text-green-600">from 8 years</span>
//             </h1>

//             <p className="text-gray-500 mt-5 max-w-md">
//               Where to grow your business as a photographer: site or social
//               media?
//             </p>

//             <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
//               Register
//             </button>
//           </div>

//           <div className="flex justify-center">
//             <img
//               src={heroImg}
//               alt="Hero"
//               className="max-w-full h-auto"
//             />
//           </div>

//         </div>
//       </section>

//       {/* ================= CLIENTS SECTION ================= */}
//       <section className="bg-white py-16">
//         <div className="max-w-[1440px] mx-auto px-6 text-center">

//           <h2 className="text-3xl font-semibold text-gray-800">
//             Our Clients
//           </h2>
//           <p className="text-gray-500 mt-2">
//             We have been working with some Fortune 500+ clients
//           </p>

//           <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-8 items-center">
//             {[c1, c2, c3, c4, c5, c6, c7].map((logo, i) => (
//               <img
//                 key={i}
//                 src={logo}
//                 alt="Client Logo"
//                 className="mx-auto h-10 grayscale hover:grayscale-0 transition"
//               />
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* ================= COMMUNITY SECTION ================= */}
//       <section className="bg-white py-20">
//         <div className="max-w-[1440px] mx-auto px-6">

//           <div className="text-center mb-14">
//             <h2 className="text-3xl font-semibold text-gray-800">
//               Manage your entire community <br />
//               in a single system
//             </h2>
//             <p className="text-gray-500 mt-2">
//               Who is Nexcent suitable for?
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               {
//                 title: "Membership Organisations",
//                 img: com1,
//               },
//               {
//                 title: "National Associations",
//                 img: com2,
//               },
//               {
//                 title: "Clubs And Groups",
//                 img: com3,
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="border rounded-xl p-8 text-center hover:shadow-lg transition"
//               >
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="h-14 mx-auto mb-4"
//                 />

//                 <h3 className="text-xl font-semibold text-gray-800">
//                   {item.title}
//                 </h3>

//                 <p className="text-gray-500 mt-3 text-sm">
//                   Our membership management software provides full automation
//                   of membership renewals and payments.
//                 </p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>




//       {/*  pixelgrad */}
//       <section className="bg-white">
//         <div className="max-w-[1440px] min-h-[433px] mx-auto px-20 py-24
//                   flex flex-col md:flex-row items-center gap-20">

//           {/* IMAGE */}
//           <div className="flex-shrink-0">
//             <img
//               src={pixelgrad}
//               alt="Pixelgrade"
//               className="w-[440px] max-w-full"
//             />
//           </div>

//           {/* CONTENT */}
//           <div className="max-w-[600px]">
//             <h2 className="text-[36px] leading-[44px] font-semibold text-[#4D4D4D]">
//               The unseen of spending three years at Pixelgrade
//             </h2>

//             <p className="mt-4 text-[16px] leading-[24px] text-[#717171]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
//               justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque
//               placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.
//             </p>

//             <button
//               className="mt-8 bg-[#4CAF4F] text-white px-8 py-3 rounded
//                    hover:bg-green-700 transition"
//             >
//               Learn More
//             </button>
//           </div>

//         </div>
//       </section>

//       {/*Helping a local business reinvent itself  */}
//       <section className="bg-[#F5F7FA]">
//         <div className="max-w-[1440px] mx-auto px-20 py-16
//                   flex flex-col md:flex-row items-center justify-between gap-10">

//           {/* LEFT CONTENT */}
//           <div className="max-w-[540px]">
//             <h2 className="text-[32px] font-semibold text-[#4D4D4D] leading-[40px]">
//               Helping a local <br />
//               <span className="text-[#4CAF4F]">
//                 business reinvent itself
//               </span>
//             </h2>

//             <p className="text-[#717171] mt-3">
//               We reached here with our hard work and dedication
//             </p>
//           </div>

//           {/* RIGHT STATS */}
//           <div className="grid grid-cols-2 gap-x-20 gap-y-8">

//             {/* ITEM */}
//             <div className="flex items-center gap-4">
//               <img src={membersIcon} alt="" className="w-10" />
//               <div>
//                 <h3 className="text-xl font-bold text-[#4D4D4D]">
//                   2,245,341
//                 </h3>
//                 <p className="text-[#717171] text-sm">Members</p>
//               </div>
//             </div>

//             {/* ITEM */}
//             <div className="flex items-center gap-4">
//               <img src={clubsIcon} alt="" className="w-10" />
//               <div>
//                 <h3 className="text-xl font-bold text-[#4D4D4D]">
//                   46,328
//                 </h3>
//                 <p className="text-[#717171] text-sm">Clubs</p>
//               </div>
//             </div>

//             {/* ITEM */}
//             <div className="flex items-center gap-4">
//               <img src={eventsIcon} alt="" className="w-10" />
//               <div>
//                 <h3 className="text-xl font-bold text-[#4D4D4D]">
//                   828,867
//                 </h3>
//                 <p className="text-[#717171] text-sm">Event Bookings</p>
//               </div>
//             </div>

//             {/* ITEM */}
//             <div className="flex items-center gap-4">
//               <img src={paymentsIcon} alt="" className="w-10" />
//               <div>
//                 <h3 className="text-xl font-bold text-[#4D4D4D]">
//                   1,926,436
//                 </h3>
//                 <p className="text-[#717171] text-sm">Payments</p>
//               </div>
//             </div>

//           </div>

//         </div>
//       </section>

//       {/* site footer */}

//       <section className="bg-white">
//         <div className="max-w-[1440px] mx-auto px-20 py-16
//                   flex flex-col md:flex-row items-center gap-16">

//           {/* LEFT IMAGE */}
//           <div className="w-full md:w-1/2 flex justify-center">
//             <img
//               src={footerIllustration}
//               alt="Footer design illustration"
//               className="max-w-[420px] w-full"
//             />
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="w-full md:w-1/2 max-w-[520px]">
//             <h2 className="text-[32px] font-semibold text-[#4D4D4D] leading-[40px]">
//               How to design your site footer like we did
//             </h2>

//             <p className="text-[#717171] mt-4 leading-7">
//               Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
//               augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
//               elit erat a magna. Donec quis erat at libero ultrices mollis.
//               In hac habitasse platea dictumst.
//             </p>

//             <button className="mt-6 bg-[#4CAF4F] text-white px-6 py-3 rounded-md
//                          hover:bg-green-600 transition">
//               Learn More
//             </button>
//           </div>

//         </div>
//       </section>


//       {/* Tim Smith */}
//       <section className="bg-[#F5F7FA]">
//         <div className="max-w-[1440px] mx-auto px-36 py-16">

//           <div className="flex flex-col md:flex-row gap-[78px] items-center">

//             {/* LEFT IMAGE */}
//             <div className="w-full md:w-[40%] flex justify-center">
//               <img
//                 src={customerImg}
//                 alt="Customer"
//                 className="w-[326px] h-[326px] rounded-lg object-cover shadow-md"
//               />
//             </div>

//             {/* RIGHT CONTENT */}
//             <div className="w-full md:w-[60%]">
//               <p className="text-[#717171] leading-7">
//                 Maecenas dignissim justo eget nulla rutrum molestie.
//                 Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper.
//                 Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim.
//               </p>

//               <h4 className="text-[#4CAF4F] font-semibold mt-4">
//                 Tim Smith
//               </h4>
//               <p className="text-[#89939E] text-sm">
//                 British Dragon Boat Racing Association
//               </p>

//               {/* LOGOS */}
//               <div className="flex items-center gap-6 mt-6 flex-wrap">
//                 <img src={logo1} alt="logo" className="h-8" />
//                 <img src={logo2} alt="logo" className="h-8" />
//                 <img src={logo3} alt="logo" className="h-8" />
//                 <img src={logo4} alt="logo" className="h-8" />
//                 <img src={logo5} alt="logo" className="h-8" />
//                 <img src={logo6} alt="logo" className="h-8" />

//                 <button className="text-[#4CAF4F] font-medium flex items-center gap-2">
//                   Meet all customers →
//                 </button>
//               </div>
//             </div>

//           </div>

//         </div>
//       </section>



//       {/* Caring is the new marketing */}
//       <section className="bg-white">
//         <div className="max-w-[1440px] mx-auto px-36 py-16">

//           {/* Heading */}
//           <div className="text-center max-w-[800px] mx-auto mb-12">
//             <h2 className="text-3xl font-semibold text-[#263238]">
//               Caring is the new marketing
//             </h2>
//             <p className="text-[#717171] mt-4">
//               The Nexcent blog is the best place to read about the latest membership insights,
//               trends and more. See who’s joining the community, read about how our community
//               are increasing their membership income and lot’s more.
//             </p>
//           </div>

//           {/* Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//             {/* Card 1 */}
//             <div className="relative">
//               <img
//                 src={blog1}
//                 alt="blog"
//                 className="rounded-lg w-full h-[286px] object-cover"
//               />
//               <div className="bg-white shadow-lg rounded-lg p-6 w-[90%] mx-auto -mt-20 relative">
//                 <p className="text-[#717171] text-center">
//                   Creating Streamlined Safeguarding Processes with OneRen
//                 </p>
//                 <button className="text-[#4CAF4F] font-medium mt-4 block mx-auto">
//                   Readmore →
//                 </button>
//               </div>
//             </div>

//             {/* Card 2 */}
//             <div className="relative">
//               <img
//                 src={blog2}
//                 alt="blog"
//                 className="rounded-lg w-full h-[286px] object-cover"
//               />
//               <div className="bg-white shadow-lg rounded-lg p-6 w-[90%] mx-auto -mt-20 relative">
//                 <p className="text-[#717171] text-center">
//                   What are your safeguarding responsibilities and how can you manage them?
//                 </p>
//                 <button className="text-[#4CAF4F] font-medium mt-4 block mx-auto">
//                   Readmore →
//                 </button>
//               </div>
//             </div>

//             {/* Card 3 */}
//             <div className="relative">
//               <img
//                 src={blog3}
//                 alt="blog"
//                 className="rounded-lg w-full h-[286px] object-cover"
//               />
//               <div className="bg-white shadow-lg rounded-lg p-6 w-[90%] mx-auto -mt-20 relative">
//                 <p className="text-[#717171] text-center">
//                   Revamping the Membership Model with Triathlon Australia
//                 </p>
//                 <button className="text-[#4CAF4F] font-medium mt-4 block mx-auto">
//                   Readmore →
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>



//       {/* Pellentesque suscipit fringilla libero eu */}
//       <section className="bg-[#F5F7FA]">
//         <div className="max-w-[1440px] mx-auto py-16 text-center">
//           <h2 className="text-3xl font-semibold text-[#263238] max-w-[700px] mx-auto">
//             Pellentesque suscipit fringilla libero eu.
//           </h2>

//           <button className="mt-8 bg-[#4CAF4F] text-white px-8 py-3 rounded-md hover:bg-green-600 transition">
//             Get a Demo →
//           </button>
//         </div>
//       </section>

//     </main>
//   );
// }

































