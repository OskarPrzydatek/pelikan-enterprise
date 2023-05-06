import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { StyledComponentsProvider } from './styles';

const App: React.FC = () => {
  return (
    <StyledComponentsProvider>
      <RouterProvider router={router} />
    </StyledComponentsProvider>
  );
};

export default App;
