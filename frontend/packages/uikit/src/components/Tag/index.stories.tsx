import Tag from './Tag';
import { variants } from './types';

export default {
  title: 'Components/Tag',
  argTypes: {},
};

export const Default: React.FC = () => (
  <>
    {Object.values(variants).map((variant) => (
      <>
        <Tag variant={variant} />
        <br />
      </>
    ))}
  </>
);
