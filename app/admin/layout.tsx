import AdminLayoutHeader from "@/app/ui/layout/admin/admin-layout-header";
import AdminLayoutFooter from "@/app/ui/layout/admin/admin-layout-footer";
import AdminMainMenu from "@/app/ui/layout/menu/admin-main-menu";

export default function AdminLayout({children}: { children: React.ReactNode }) {
  return (
    <>
      <AdminLayoutHeader/>

      <AdminMainMenu/>

      <div
        className="absolute top-[55px] right-0 w-[calc(100%-300px)] pb-10 h-[calc(100%-105px)] border-red-500
        bg-[url(/page-background.jpg)] bg-cover overflow-auto"
        style={{backgroundPosition: 'center bottom'}}
      >
        {children}
      </div>

      <AdminLayoutFooter/>
    </>
  )
}
