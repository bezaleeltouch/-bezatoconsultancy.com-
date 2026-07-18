import { Route, Switch } from 'wouter';
import Home from '@/pages/Home';
import Courses from '@/pages/Courses';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Contact from '@/pages/Contact';
import Curriculum from '@/pages/Curriculum';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/courses" component={Courses} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/curriculum/:slug" component={Curriculum} />
      <Route path="/contact" component={Contact} />
      <Route>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500">Page not found.</p>
        </div>
      </Route>
    </Switch>
  );
}
