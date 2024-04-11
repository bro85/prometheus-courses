import { FC } from 'react';
import { Page } from '../../components/page/Page';
import { Header } from '../../components/header/Header';
import { useCourse } from '../../models/courses/useCourse';
import { MarketingHero } from '../../components/marketingHero/MarketingHero';
import { MyCourses } from '../../components/myCourses/MyCourses';

export const Dashboard: FC = () => {
  const user = { name: 'bro85' };

  const courses = useCourse();

  return (
    <Page header={<Header user={user} />}>
      <MarketingHero></MarketingHero>
      <MyCourses {...courses} />
    </Page>
  );
};
