
import { profile } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm text-muted-foreground">
          {'© '}
          {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
