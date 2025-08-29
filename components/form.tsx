'use client';

import { useFormStatus } from 'react-dom';
import { handleSubmit } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending} className="w-full bg-purple-600 hover:bg-purple-700 text-white">
      {pending ? 'Submitting...' : 'Send message'}
    </Button>
  );
}

export function ContactForm() {
  return (
    <form action={handleSubmit} className="flex w-full flex-col gap-5">
      <div className="grid gap-2 text-left">
        <label htmlFor="name" className="text-sm leading-none font-medium text-neutral-400">Name</label>
        <Input
          id="name"
          name="name"
          placeholder="Name"
          type="text"
          autoComplete="name"
          required
          className="file:text-foreground placeholder:text-neutral-500 selection:bg-purple-600 selection:text-white dark:bg-black/[.3] border-gray-700 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-purple-500 focus-visible:ring-purple-500/50 focus-visible:ring-[3px] aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500"
        />
      </div>

      <div className="grid gap-2 text-left">
        <label htmlFor="email" className="text-sm leading-none font-medium text-neutral-400">Email</label>
        <Input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          autoComplete="email"
          required
          className="file:text-foreground placeholder:text-neutral-500 selection:bg-purple-600 selection:text-white dark:bg-black/[.3] border-gray-700 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-purple-500 focus-visible:ring-purple-500/50 focus-visible:ring-[3px] aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500"
        />
      </div>

      <div className="grid gap-2 text-left">
        <label htmlFor="company" className="text-sm leading-none font-medium text-neutral-400">Company</label>
        <Input
          id="company"
          name="company"
          placeholder="Company"
          type="text"
          autoComplete="organization"
          className="file:text-foreground placeholder:text-neutral-500 selection:bg-purple-600 selection:text-white dark:bg-black/[.3] border-gray-700 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-purple-500 focus-visible:ring-purple-500/50 focus-visible:ring-[3px] aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500"
        />
      </div>

      <div className="grid gap-2 text-left">
        <label htmlFor="message" className="text-sm leading-none font-medium text-neutral-400">Message</label>
        <Textarea
          id="message"
          name="message"
          placeholder="Type your message"
          autoComplete="off"
          className="border-gray-700 placeholder:text-neutral-500 focus-visible:border-purple-500 focus-visible:ring-purple-500/50 aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500 dark:bg-black/[.3] flex field-sizing-content w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[106px]"
        />
      </div>

      <div className="flex items-start gap-2 text-left">
        <input type="checkbox" id="privacy" name="privacy" required className="peer border-gray-700 dark:bg-black/[.3] data-[state=checked]:bg-purple-600 data-[state=checked]:text-white focus-visible:border-purple-500 focus-visible:ring-purple-500/50 aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500 size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50" />
        <label htmlFor="privacy" className="text-sm select-none text-neutral-400 inline leading-none font-normal">
          By selecting this you agree to our <a className="text-white underline" href="#">Privacy Policy</a>.
        </label>
      </div>

      <SubmitButton />
    </form>
  );
}