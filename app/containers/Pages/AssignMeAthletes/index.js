import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import AdvFilter from './../../../components/Tables/AssignMeAthletes'

function AssignMeAthletes() {
  const title = brand.name + ' - Assign Me Athletes';
  const description = brand.desc;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock whiteBg icon="ios-person-add-outline" title="Assign Me Athletes" desc="From here you can assign yourself athletes to be in your charge">
        <AdvFilter />
      </PapperBlock>
    </div>
  );
}

export default AssignMeAthletes;
