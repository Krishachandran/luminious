import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { CustomCursor } from './components/CustomCursor';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';
import Success from './pages/Success';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen flex flex-col">
        <CustomCursor />
        <Navigation />
        <div className="mb-16" />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/success",
        element: <Success />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/blog/:id",
        element: <BlogArticle />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;