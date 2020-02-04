import loadable from 'react-loadable';
import LoadingComponent from '../../components/Loading';

export const AsyncLayout = loadable({
    loader: () => import('../../containers/Layout/AppLayoutStaticContainer'),
    loading: LoadingComponent
})

export const AsyncHome = loadable({
    loader: () => import('../../containers/Home/HomeContainer'),
    loading: LoadingComponent,
});

export const AsyncUsers = loadable({
    loader: () => import('../../containers/Users'),
    loading: LoadingComponent,
});

export const AsyncNotFound = loadable({
    loader: () => import('../../containers/Exception/NotFoundContainer'),
    loading: LoadingComponent,
});

export const AsyncInternalServer = loadable({
    loader: () => import('../../containers/Exception/InternalServerContainer'),
    loading: LoadingComponent,
  });

export const AsyncBlog = loadable({
    loader: () => import('../../containers/Blog'),
    loading: LoadingComponent,
});

export const AsyncContact = loadable({
    loader: () => import('../../containers/Contact'),
    loading: LoadingComponent,
});

export const AsyncGallery = loadable({
    loader: () => import('../../containers/Gallery'),
    loading: LoadingComponent,
});

export const AsyncAbout = loadable({
    loader: () => import('../../containers/About'),
    loading: LoadingComponent,
});

export const AsyncServices = loadable({
    loader: () => import('../../containers/Services'),
    loading: LoadingComponent,
});

export const AsyncLoginForm = loadable({
    loader: () => import('../../containers/Auth/LoginPageContainer'),
    loading: LoadingComponent,
});

export const AsyncRegisterPage = loadable({
    loader: () => import('../../containers/Auth/RegisterPageContainer'),
    loading: LoadingComponent,
});