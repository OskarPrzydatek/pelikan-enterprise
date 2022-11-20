import { AppRouter } from './router';
import { StyledComponentsProvider } from './styles';

const App: React.FC = () => {
  return (
    <StyledComponentsProvider>
      <AppRouter />
    </StyledComponentsProvider>
  );
};

export default App;
