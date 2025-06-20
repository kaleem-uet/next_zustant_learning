import { CalendarRange, Hand } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="relative isolate overflow-hidden bg-background py-16 sm:py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-foreground">
              Subscribe to our newsletter
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-card px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-border placeholder:text-muted-foreground focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-card p-2 ring-1 ring-border">
                <CalendarRange
                  aria-hidden="true"
                  className="size-6 text-foreground"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-foreground">
                Weekly articles
              </dt>
              <dd className="mt-2 text-base/7 text-muted-foreground">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure
                cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-card p-2 ring-1 ring-border">
                <Hand aria-hidden="true" className="size-6 text-foreground" />
              </div>
              <dt className="mt-4 text-base font-semibold text-foreground">
                No spam
              </dt>
              <dd className="mt-2 text-base/7 text-muted-foreground">
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678 w-288.75 bg-gradient-to-tr from-primary to-secondary opacity-30"
        />
      </div>
    </div>
  );
}
