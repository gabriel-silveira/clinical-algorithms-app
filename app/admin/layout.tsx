import AdminLayoutHeader from "@/app/ui/headers/admin-layout-header";
import AdminLayoutFooter from "@/app/ui/footers/admin-layout-footer";
import AdminMainMenu from "@/app/ui/menus/admin-main-menu";

export default function AdminLayout({children}: { children: React.ReactNode }) {
  return (
    <>
      <AdminLayoutHeader/>

      <AdminMainMenu/>

      <div
        className="absolute top-[55px] right-0 w-[calc(100%-270px)] pb-10 h-[calc(100%-105px)] border-red-500
        bg-[url(/page-background.jpg)] bg-cover text-white overflow-auto"
        style={{backgroundPosition: 'center bottom'}}
      >
        {children}
      </div>

      <AdminLayoutFooter/>
    </>
  )
}
