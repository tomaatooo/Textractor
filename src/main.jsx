
import AppRouter from './AppRouter.jsx';
import ReactDOM from 'react-dom/client'
import './main.css'
import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from '@clerk/clerk-react';

const PERISHABLE_KEY=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClerkProvider publishableKey={PERISHABLE_KEY}>
    <AppRouter/>
  </ClerkProvider>
  
);

reportWebVitals();
