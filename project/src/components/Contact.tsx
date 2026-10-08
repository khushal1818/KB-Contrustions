// import { useState } from 'react';
// import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

// type FormState = {
//   name: string;
//   email: string;
//   phone: string;
//   projectType: string;
//   message: string;
// };

// const initialForm: FormState = {
//   name: '',
//   email: '',
//   phone: '',
//   projectType: 'Residential',
//   message: '',
// };

// const projectTypes = [
//   'Residential',
//   'Commercial',
//   'Industrial',
//   'Turnkey',
//   'Renovation & Remodeling',
//   'Project Management',
// ];

// export default function Contact() {
//   const [form, setForm] = useState<FormState>(initialForm);
//   const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('submitting');

//     // Simulate submission
//     setTimeout(() => {
//       if (form.name && form.email && form.message) {
//         setStatus('success');
//         setForm(initialForm);
//         setTimeout(() => setStatus('idle'), 5000);
//       } else {
//         setStatus('error');
//         setTimeout(() => setStatus('idle'), 5000);
//       }
//     }, 1200);
//   };

//   const inputClasses =
//     'w-full bg-transparent border-b border-ink-600 py-3 text-white placeholder-ink-500 outline-none transition-colors focus:border-amber-400';
//   const labelClasses = 'mb-1 block text-xs font-medium uppercase tracking-wider text-ink-400';

//   return (
//     <section id="contact" className="relative bg-ink-950 py-24 lg:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
//           {/* Left: info */}
//           <div className="reveal">
//             <div className="mb-4 flex items-center gap-3">
//               <div className="h-px w-10 bg-amber-400" />
//               <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
//                 Get in Touch
//               </span>
//             </div>
//             <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
//               Let&rsquo;s Build
//               <br />
//               Something Together
//             </h2>
//             <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-300">
//               Tell us about your project and we&rsquo;ll get back to you with a personalized
//               consultation. Every great space starts with a conversation.
//             </p>

//             {/* Brand quote */}
//             <div className="mt-12 border-l-2 border-amber-400/60 pl-6">
//               <p className="font-display text-lg italic leading-relaxed text-ink-300">
//                 &ldquo;We don&rsquo;t just construct buildings. We create spaces where ideas,
//                 businesses and lives can grow.&rdquo;
//               </p>
//             </div>
//           </div>

//           {/* Right: form */}
//           <div className="reveal reveal-delay-2">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid gap-6 sm:grid-cols-2">
//                 <div>
//                   <label htmlFor="name" className={labelClasses}>Full Name *</label>
//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     required
//                     value={form.name}
//                     onChange={handleChange}
//                     className={inputClasses}
//                     placeholder="Your name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="phone" className={labelClasses}>Phone</label>
//                   <input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     value={form.phone}
//                     onChange={handleChange}
//                     className={inputClasses}
//                     placeholder="+91 00000 00000"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="email" className={labelClasses}>Email Address *</label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   value={form.email}
//                   onChange={handleChange}
//                   className={inputClasses}
//                   placeholder="you@example.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="projectType" className={labelClasses}>Project Type</label>
//                 <select
//                   id="projectType"
//                   name="projectType"
//                   value={form.projectType}
//                   onChange={handleChange}
//                   className={`${inputClasses} appearance-none`}
//                 >
//                   {projectTypes.map((type) => (
//                     <option key={type} value={type} className="bg-ink-900 text-white">
//                       {type}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label htmlFor="message" className={labelClasses}>Project Details *</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows={4}
//                   value={form.message}
//                   onChange={handleChange}
//                   className={`${inputClasses} resize-none`}
//                   placeholder="Tell us about your vision, scope, timeline..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={status === 'submitting'}
//                 className="group flex w-full items-center justify-center gap-2 bg-amber-500 px-8 py-4 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-amber-400 disabled:opacity-60"
//               >
//                 {status === 'submitting' ? (
//                   <>Sending...</>
//                 ) : (
//                   <>
//                     Send Enquiry
//                     <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </>
//                 )}
//               </button>

//               {/* Status messages */}
//               {status === 'success' && (
//                 <div className="flex items-center gap-2 bg-green-500/10 px-4 py-3 text-sm text-green-400">
//                   <CheckCircle2 className="h-5 w-5" />
//                   Thank you! Your enquiry has been received. We&rsquo;ll be in touch soon.
//                 </div>
//               )}
//               {status === 'error' && (
//                 <div className="flex items-center gap-2 bg-red-500/10 px-4 py-3 text-sm text-red-400">
//                   <AlertCircle className="h-5 w-5" />
//                   Please fill in all required fields before submitting.
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  projectType: 'Residential',
  message: '',
};

const projectTypes = [
  'Residential',
  'Commercial',
  'Industrial',
  'Turnkey',
  'Renovation & Remodeling',
  'Project Management',
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);

  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Required fields check
    if (!form.name || !form.email || !form.message) {
      setStatus('error');

      setTimeout(() => {
        setStatus('idle');
      }, 5000);

      return;
    }

    setStatus('submitting');

    try {
      const formData = new FormData();

      // ==========================================
      // WEB3FORMS ACCESS KEY
      // Replace this with your real Access Key
      // ==========================================
      formData.append(
        'access_key',
        '84b39245-f727-485e-adf8-bdd118c3f298'
      );

      // Form fields
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('projectType', form.projectType);
      formData.append('message', form.message);

      // Email subject
      formData.append(
        'subject',
        `New Project Enquiry - ${form.projectType}`
      );

      // Sender name
      formData.append(
        'from_name',
        'Website Contact Form'
      );

      // Web3Forms spam protection
      formData.append('botcheck', '');

      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      console.log('Web3Forms Response:', data);

      if (response.ok && data.success) {
        // Success
        setStatus('success');

        // Clear form
        setForm(initialForm);

        // Hide success message after 5 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        // Web3Forms error
        console.error(
          'Web3Forms Error:',
          data.message
        );

        setStatus('error');

        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      }
    } catch (error) {
      console.error(
        'Contact Form Error:',
        error
      );

      setStatus('error');

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  const inputClasses =
    'w-full bg-transparent border-b border-ink-600 py-3 text-white placeholder-ink-500 outline-none transition-colors focus:border-amber-400';

  const labelClasses =
    'mb-1 block text-xs font-medium uppercase tracking-wider text-ink-400';

  return (
    <section
      id="contact"
      className="relative bg-ink-950 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left: Info */}
          <div className="reveal">

            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-amber-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                Get in Touch
              </span>
            </div>

            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let&rsquo;s Build
              <br />
              Something Together
            </h2>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-300">
              Tell us about your project and we&rsquo;ll get back to you with a personalized
              consultation. Every great space starts with a conversation.
            </p>

            {/* Brand quote */}
            <div className="mt-12 border-l-2 border-amber-400/60 pl-6">
              <p className="font-display text-lg italic leading-relaxed text-ink-300">
                &ldquo;We don&rsquo;t just construct buildings. We create spaces where ideas,
                businesses and lives can grow.&rdquo;
              </p>
            </div>

          </div>

          {/* Right: Form */}
          <div className="reveal reveal-delay-2">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name + Phone */}
              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className={labelClasses}
                  >
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className={labelClasses}
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="+91 00000 00000"
                  />
                </div>

              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className={labelClasses}
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="you@example.com"
                />
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="projectType"
                  className={labelClasses}
                >
                  Project Type
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none`}
                >
                  {projectTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-ink-900 text-white"
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Details */}
              <div>
                <label
                  htmlFor="message"
                  className={labelClasses}
                >
                  Project Details *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell us about your vision, scope, timeline..."
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="group flex w-full items-center justify-center gap-2 bg-amber-500 px-8 py-4 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  <>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              {/* Success */}
              {status === 'success' && (
                <div className="flex items-center gap-2 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />

                  <span>
                    Thank you! Your enquiry has been sent successfully.
                    We&rsquo;ll be in touch soon.
                  </span>
                </div>
              )}

              {/* Error */}
              {status === 'error' && (
                <div className="flex items-center gap-2 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  <AlertCircle className="h-5 w-5 shrink-0" />

                  <span>
                    Something went wrong. Please check your details and try again.
                  </span>
                </div>
              )}

            </form>

          </div>
        </div>
      </div>
    </section>
  );
}