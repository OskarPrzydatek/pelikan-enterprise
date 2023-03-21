import { Router } from './router';
import { StyledComponentsProvider } from './styles';

const App: React.FC = () => {
  return (
    <StyledComponentsProvider>
      <Router />
    </StyledComponentsProvider>
  );
};

export default App;
