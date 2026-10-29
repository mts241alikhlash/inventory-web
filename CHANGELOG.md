# inventory-web

## 1.5.0

### Minor Changes

- d4264da: Match admission-web's shell and page styling: upgrade `@mts241alikhlash/ui` to
  1.11 and `web-shared` to 1.3.1, take the shared `theme.css` tokens, move to the
  fixed top bar with the app switcher and `NavUser`, use the inset sidebar with
  `SidebarToggle`, apply the flat list wrapper and admission's card spacing, and
  adopt admission's auth and profile screens.

  `profileRoutes` is now registered, so `/profile` and `/profile/edit` resolve
  instead of falling through to the 404 page.

  `vite.config.ts` excludes `@mts241alikhlash/ui` from the dependency pre-bundle,
  as the other apps do, so the package is one module instance in development.

## 1.4.4

### Patch Changes

- 62ed2f5: Run on Node.js 24.22.1, the release that fixes the October 2026 security issues (Brotli decoder out-of-bounds write, TLS hostname checks, DNS NUL handling). The base image, the CI jobs and the engines range move from 24.21.0 to 24.22.1.

## 1.4.3

### Patch Changes

- 2e01e01: Ejaan Amerika di kode, komentar, dan nama test (`honours` menjadi `honors`, `enrolment` menjadi `enrollment`, dan sejenisnya).

## 1.4.2

### Patch Changes

- d9a8307: Card, judul, dan isi memakai standar `@mts241alikhlash/ui` 1.8; field form memakai `FloatingField`; aksi baris unit aset memakai `ActionCell items`.

## 1.4.1

### Patch Changes

- 50cf0a8: The sidebar menu follows permissions only (web-shared 1.2.0), so a visible item always opens, also for the super admin.

## 1.4.0

### Minor Changes

- 90ea9cc: The profile address editor now selects official administrative regions and saves their codes.

### Patch Changes

- d04211e: The Vite dev server pre-bundles the Unovis `striptags` dependency so pages with charts load in the browser. Development only.

## 1.3.0

### Minor Changes

- 64c773d: Sub-pages go back with `BackButton` from `@mts241alikhlash/ui` 1.3.1, left of the card title and labelled with where it leads, and breadcrumbs name the record a page is about instead of "Detail" or "Ubah"; long crumbs truncate. Another user's profile gets a back button and their name in the breadcrumb. The profile and address tabs use floating labels with every field tied to its label, including the birth date picker. Asset and loan forms use the same back button, and the asset form names its asset.

### Patch Changes

- 64c773d: Badges take `rounded-md` from `@mts241alikhlash/ui` 1.2.1. Workflow code labels use the badge radius, and loan unit selection uses the shared `Checkbox` instead of native inputs.

## 1.2.0

### Minor Changes

- decad75: Search fields use `SearchInput` from `@mts241alikhlash/ui` 1.2.0: one icon, height and text size on every list, no zoom on iOS, and `DataTable`'s built-in filter follows it.

## 1.1.0

### Minor Changes

- c602457: Icons come from `@lucide/vue` (replacing the deprecated `lucide-vue-next`), with `@mts241alikhlash/ui` and `web-shared` 1.1.0.

## 1.0.1

### Patch Changes

- 6dafa5a: Update @mts241alikhlash/ui to 1.0.1.

## 1.0.0

### Major Changes

- First stable release.
