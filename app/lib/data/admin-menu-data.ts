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
      },
      {
        label: 'Categorias',
        Icon: CategoryIcon,
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
      },
    ],
  },
];
