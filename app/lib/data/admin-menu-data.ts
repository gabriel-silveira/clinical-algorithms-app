import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import EditNoteIcon from '@mui/icons-material/EditNote';

export default [
  {
    label: 'Registros básicos',
    Icon: LibraryBooksIcon,
    items: [
      {
        label: 'Usuários',
        Icon: AccountCircleIcon,
        link: '/admin/users',
      },
      {
        label: 'Categorias',
        Icon: CategoryIcon,
        link: '/admin/categories',
      },
    ],
  },
  {
    label: 'Algoritmos',
    Icon: AccountTreeIcon,
    items: [
      {
        label: 'Manutenção',
        Icon: EditNoteIcon,
        link: '/admin/algorithms',
      },
    ],
  },
];
