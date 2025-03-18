import adminMenu from '@/app/lib/data/admin-menu-data';
import Link from "next/link";

export default function AdminMainMenu() {
  return (
    <div className="absolute left-0 top-[55px] w-[300px] h-[calc(100%-105px)]">
      {adminMenu.map(({label, Icon, items}, index) => (
        <div key={`section-${index}`}>
          <div className="p-3">
            <Icon
              color="primary"
              className="mr-3"
            /> {label}
          </div>

          {items.map(({label, link, Icon}, indexItem) => (
            <Link
              href={link}
              key={`section-item-${indexItem}`}
            >
              <div className="p-3 hover:bg-primary/10 cursor-pointer">
                <Icon
                  color="primary"
                  className="mr-3 ml-9"
                /> {label}
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}
