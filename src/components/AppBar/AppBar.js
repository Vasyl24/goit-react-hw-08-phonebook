import { Navigation } from '../Navigation/Navigation.js';
import { UserMenu } from '../UserMenu/UserMenu.js';
import { AuthNav } from '../AuthNav/AuthNav.js';
import { useAuth } from 'useAuth';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
