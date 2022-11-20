import { version } from '../../../package.json';
import { DashboardTemplate } from '../../components/templates';

export const DashboardPage: React.FC = () => {
  return <DashboardTemplate version={version} />;
};
