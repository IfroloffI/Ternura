import type {FC} from 'react';
import Props from '@/components/MainHeader/MainHeader.props';

const MainHeader: FC<Props> = () => {
  return (
    <div className='flex justify-between items-center px-20 py-6'>
      <div>lOGO</div>
      <div>
        <ul>
          <li>
            <p>Поиск</p>
          </li>
          <li>
            <p>Моя анкета</p>
          </li>
          <li>
            <p>Избранное</p>
          </li>
        </ul>
      </div>
      <div>
        end
      </div>
    </div>
  );
};

export {MainHeader};
