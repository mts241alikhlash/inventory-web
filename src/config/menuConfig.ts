import {
  LayoutDashboard,
  ListChecks,
  Package,
  ClipboardList,
  CheckSquare,
  Printer,
} from 'lucide-vue-next'

export type {
  SubMenuItem,
  MenuItem,
  MenuSection,
} from '@mts241alikhlash/web-shared/types/menu.types'
import type { MenuSection } from '@mts241alikhlash/web-shared/types/menu.types'

export const menuSections: MenuSection[] = [
  {
    key: 'main',
    label: 'menu.section.main',
    items: [
      {
        title: 'menu.dashboard',
        url: '/dashboard',
        icon: LayoutDashboard,
      },
    ],
  },

  {
    key: 'asset-management',
    label: 'menu.section.assets',
    requiredPermission: 'inventory-assets.read',
    items: [
      {
        title: 'menu.assetList',
        url: '/inventory/assets',
        icon: Package,
      },
      {
        title: 'menu.labelPrinting',
        url: '/inventory/assets/label-printing',
        icon: Printer,
      },
    ],
  },
  {
    key: 'asset-circulation',
    label: 'menu.section.circulation',
    requiredPermission: 'inventory-loans.read',
    items: [
      {
        key: 'asset-circulation-loan',
        title: 'menu.loan',
        url: '#',
        icon: ClipboardList,
        items: [
          { title: 'menu.loanTransaction', url: '/inventory/loans' },
          { title: 'menu.circulationHistory', url: '/inventory/history' },
        ],
      },
    ],
  },
  {
    key: 'approval',
    label: 'menu.section.approval',
    requiredPermission: 'inventory-approvals.read',
    items: [
      {
        key: 'approval-list',
        title: 'menu.approval',
        url: '#',
        icon: CheckSquare,
        items: [
          { title: 'menu.approvalList', url: '/inventory/approvals' },
          {
            title: 'menu.approvalFlow',
            url: '/inventory/workflows',
            requiredPermission: 'inventory-approvals.create',
          },
        ],
      },
    ],
  },

  {
    key: 'settings',
    label: 'menu.section.settings',
    requiredPermission: 'inventory-reference-data.read',
    items: [
      {
        key: 'settings-reference',
        title: 'menu.reference',
        url: '#',
        icon: ListChecks,
        items: [
          { title: 'menu.assetCategory', url: '/inventory/categories' },
          { title: 'menu.fundingSource', url: '/inventory/funding-sources' },
          { title: 'menu.location', url: '/inventory/locations' },
          { title: 'menu.assetCondition', url: '/inventory/conditions' },
          { title: 'menu.assetStatus', url: '/inventory/statuses' },
        ],
      },
    ],
  },
]
