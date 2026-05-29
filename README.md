# Admin Dashboard - Codebase Summary

This repository is a Next.js App Router admin dashboard for managing training programs, departments, users, and certificates. It includes authenticated admin routes, a sidebar layout, and a reusable UI component system.

## Tech Stack

- Next.js 16 App Router, React 19, TypeScript
- Tailwind CSS 4, tw-animate, shadcn/ui, Radix UI
- React Hook Form, Zod
- Recharts, date-fns, lucide-react

## Scripts

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Routing And Layouts

Routes (App Router):

- /login
- /dashboard
- /calendar
- /departments
- /departments/[id]
- /training-categories
- /training-plans
- /training-plans/[id]/edit
- /training-records
- /uploaded-certificates
- /user-management
- /user-management/[userId]
- / redirects to /dashboard

Layouts:

- `RootLayout` in [app/layout.tsx](app/layout.tsx) sets metadata and loads Geist fonts.
- `AuthLayout` in [app/(auth)/layout.tsx](app/(auth)/layout.tsx) centers auth pages on a light background.
- `DashboardLayout` in [app/(root)/layout.tsx](app/(root)/layout.tsx) enforces auth with `getMe`, renders `AppSidebar`, and provides the mobile sidebar trigger.

## Types

- [app/types/certificate.ts](app/types/certificate.ts): `Certificate`, `CertificateStatus`
- [app/types/department.ts](app/types/department.ts): `Department`, `Staff`
- [app/types/record.ts](app/types/record.ts): `TrainingRecord`, `TrainingRecordMeta`, `OjtRecord`
- [app/types/trainingPlan.ts](app/types/trainingPlan.ts): `Course`
- [app/types/userManagement.ts](app/types/userManagement.ts): `ApiUser`, `User`, `UserList`, `UserMeta`

## API Helpers And Actions

API base URL:

- [app/api/api.ts](app/api/api.ts): `API_BASE_URL`

API helper functions:

- [lib/api/authFetch.ts](lib/api/authFetch.ts): `authFetch`
- [lib/api/getMe.ts](lib/api/getMe.ts): `getMe`
- [lib/api/getDepartment.ts](lib/api/getDepartment.ts): `getDepartments`, `getDepartmentById`
- [lib/api/getTrainingPlan.ts](lib/api/getTrainingPlan.ts): `getTrainingPlans`, `getTrainingPlanById`
- [lib/api/getUser.ts](lib/api/getUser.ts): `getUsers`, `getUserById`
- [lib/api/getCertificate.ts](lib/api/getCertificate.ts): `getCertificates`

Server actions:

- [lib/actions/AdminLogin/login.ts](lib/actions/AdminLogin/login.ts): `LoginAction`
- [lib/actions/AdminLogin/logout.ts](lib/actions/AdminLogin/logout.ts): `logoutAction`
- [lib/actions/AdminDepartment/createDepartment.ts](lib/actions/AdminDepartment/createDepartment.ts): `CreateDepartmentAction`
- [lib/actions/AdminDepartment/editDepartment.ts](lib/actions/AdminDepartment/editDepartment.ts): `EditDepartmentAction`
- [lib/actions/AdminDepartment/deleteDepartment.ts](lib/actions/AdminDepartment/deleteDepartment.ts): `DeleteDepartmentAction`
- [lib/actions/AdminDepartment/getDepartment.ts](lib/actions/AdminDepartment/getDepartment.ts): `getDepartments`, `getDepartmentById`
- [lib/actions/deleteDepartment.ts](lib/actions/deleteDepartment.ts): `DeleteDepartmentAction`
- [lib/actions/AdminTrainingPlan/createTrainingPlan.ts](lib/actions/AdminTrainingPlan/createTrainingPlan.ts): `CreateTrainingPlanAction`
- [lib/actions/AdminTrainingPlan/editTrainingPlan.ts](lib/actions/AdminTrainingPlan/editTrainingPlan.ts): `EditTrainingPlanAction`
- [lib/actions/AdminTrainingPlan/deleteTrainingPlan.ts](lib/actions/AdminTrainingPlan/deleteTrainingPlan.ts): `DeleteTrainingPlanAction`
- [lib/actions/AdminTrainingRecord/searchRecords.ts](lib/actions/AdminTrainingRecord/searchRecords.ts): `SearchTrainingRecordsAction`
- [lib/actions/AdminUser/createUser.ts](lib/actions/AdminUser/createUser.ts): `CreateUserAction`
- [lib/actions/AdminUser/editUser.ts](lib/actions/AdminUser/editUser.ts): `EditUserAction`
- [lib/actions/AdminUser/deleteUser.ts](lib/actions/AdminUser/deleteUser.ts): `DeleteUserAction`

Mock data and utilities:

- [lib/data.ts](lib/data.ts): `departments`, `users`, `courses`, `certificates`, `ojtRecords`, `TrainingTypeEnum`, `TrainingCategoryEnum`
- [lib/color.ts](lib/color.ts): `colors`
- [lib/utils.ts](lib/utils.ts): `cn`
- [hooks/use-mobile.ts](hooks/use-mobile.ts): `useIsMobile`

## Component Inventory

Core layout and shared components:

- [components/AdminSidebar.tsx](components/AdminSidebar.tsx)
- [components/userInfo.tsx](components/userInfo.tsx)
- [components/logoCard.tsx](components/logoCard.tsx)
- [components/customizeButton.tsx](components/customizeButton.tsx)

Login:

- [components/login/logo.tsx](components/login/logo.tsx)

Dashboard:

- [components/dashboard/DashboardCard.tsx](components/dashboard/DashboardCard.tsx)
- [components/dashboard/buttonDialog.tsx](components/dashboard/buttonDialog.tsx)
- [components/dashboard/dialogForm.tsx](components/dashboard/dialogForm.tsx)
- [components/dashboard/pageHeader.tsx](components/dashboard/pageHeader.tsx)
- [components/dashboard/customLineChart.tsx](components/dashboard/customLineChart.tsx)
- [components/dashboard/test.tsx](components/dashboard/test.tsx)

Departments:

- [components/department/departmentClient.tsx](components/department/departmentClient.tsx)
- [components/department/departmentCard.tsx](components/department/departmentCard.tsx)
- [components/department/staffTable.tsx](components/department/staffTable.tsx)
- [components/department/staffDialog.tsx](components/department/staffDialog.tsx)
- [components/department/EditDepartmentDialog.tsx](components/department/EditDepartmentDialog.tsx)
- [components/department/DeleteDepartmentDialog.tsx](components/department/DeleteDepartmentDialog.tsx)

Training categories:

- [components/training-categories/AddCategoryForm.tsx](components/training-categories/AddCategoryForm.tsx)
- [components/training-categories/EditCategoryForm.tsx](components/training-categories/EditCategoryForm.tsx)
- [components/training-categories/categoryCard.tsx](components/training-categories/categoryCard.tsx)

Training plans:

- [components/training-plans/createTrainingPlanForm.tsx](components/training-plans/createTrainingPlanForm.tsx)
- [components/training-plans/editTrainingPlanForm.tsx](components/training-plans/editTrainingPlanForm.tsx)
- [components/training-plans/infoDetail.tsx](components/training-plans/infoDetail.tsx)
- [components/training-plans/planCard.tsx](components/training-plans/planCard.tsx)
- [components/training-plans/viewPlanDetails.tsx](components/training-plans/viewPlanDetails.tsx)

Training records:

- [components/training-records/trainingRecordClient.tsx](components/training-records/trainingRecordClient.tsx)
- [components/training-records/TrainingRecordTable.tsx](components/training-records/TrainingRecordTable.tsx)
- [components/training-records/FilterGroup.tsx](components/training-records/FilterGroup.tsx)
- [components/training-records/RangeCalendar.tsx](components/training-records/RangeCalendar.tsx)
- [components/training-records/CategorySelect.tsx](components/training-records/CategorySelect.tsx)
- [components/training-records/DepartmentSelect.tsx](components/training-records/DepartmentSelect.tsx)
- [components/training-records/StatusSelect.tsx](components/training-records/StatusSelect.tsx)
- [components/training-records/categoryMultipleSelect.tsx](components/training-records/categoryMultipleSelect.tsx)
- [components/training-records/departmentMultipleSelect.tsx](components/training-records/departmentMultipleSelect.tsx)
- [components/training-records/hi.tsx](components/training-records/hi.tsx)

Uploaded certificates:

- [components/uploaded-certificates/CertificateTable.tsx](components/uploaded-certificates/CertificateTable.tsx)

User management:

- [components/userManagement/UserManagementClient.tsx](components/userManagement/UserManagementClient.tsx)
- [components/userManagement/UserForm.tsx](components/userManagement/UserForm.tsx)
- [components/userManagement/EditUserForm.tsx](components/userManagement/EditUserForm.tsx)
- [components/userManagement/DeleteUserDialog.tsx](components/userManagement/DeleteUserDialog.tsx)
- [components/userManagement/UserView.tsx](components/userManagement/UserView.tsx)
- [components/userManagement/UserDetails.tsx](components/userManagement/UserDetails.tsx)
- [components/userManagement/userTable.tsx](components/userManagement/userTable.tsx)
- [components/userManagement/detailText.tsx](components/userManagement/detailText.tsx)
- [components/userManagement/contact.tsx](components/userManagement/contact.tsx)
- [components/userManagement/certificationCard.tsx](components/userManagement/certificationCard.tsx)

UI primitives (shadcn/ui based):

- [components/ui/app-sidebar.tsx](components/ui/app-sidebar.tsx)
- [components/ui/avatar.tsx](components/ui/avatar.tsx)
- [components/ui/badge.tsx](components/ui/badge.tsx)
- [components/ui/button.tsx](components/ui/button.tsx)
- [components/ui/calendar.tsx](components/ui/calendar.tsx)
- [components/ui/card.tsx](components/ui/card.tsx)
- [components/ui/checkbox.tsx](components/ui/checkbox.tsx)
- [components/ui/command.tsx](components/ui/command.tsx)
- [components/ui/dialog.tsx](components/ui/dialog.tsx)
- [components/ui/dropdown-menu.tsx](components/ui/dropdown-menu.tsx)
- [components/ui/field.tsx](components/ui/field.tsx)
- [components/ui/form.tsx](components/ui/form.tsx)
- [components/ui/input.tsx](components/ui/input.tsx)
- [components/ui/label.tsx](components/ui/label.tsx)
- [components/ui/select.tsx](components/ui/select.tsx)
- [components/ui/separator.tsx](components/ui/separator.tsx)
- [components/ui/sheet.tsx](components/ui/sheet.tsx)
- [components/ui/sidebar.tsx](components/ui/sidebar.tsx)
- [components/ui/skeleton.tsx](components/ui/skeleton.tsx)
- [components/ui/table.tsx](components/ui/table.tsx)
- [components/ui/textarea.tsx](components/ui/textarea.tsx)
- [components/ui/tooltip.tsx](components/ui/tooltip.tsx)

## Notes For New Developers

- Authenticated routes live under the (root) group and rely on `getMe` inside the root layout.
- The sidebar layout uses `SidebarProvider` and `AppSidebar` to manage desktop and mobile navigation.
- Mock data in `lib/data.ts` can be used for local development if backend endpoints are unavailable.
