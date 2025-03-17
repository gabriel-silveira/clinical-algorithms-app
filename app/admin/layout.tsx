import AdminLayoutHeader from "@/app/ui/layout/admin/admin-layout-header";
import AdminLayoutFooter from "@/app/ui/layout/admin/admin-layout-footer";
import AdminMainMenu from "@/app/ui/layout/menu/admin-main-menu";

export default function AdminLayout({children}: { children: React.ReactNode }) {
  return (
    <>
      <AdminLayoutHeader/>

      <AdminMainMenu/>

      <div id="admin-page-content">
        {children}
      </div>

      <AdminLayoutFooter/>
    </>
  )
}
