import type { Schema, Attribute } from '@strapi/strapi';

export interface FormFormTest extends Schema.Component {
  collectionName: 'components_form_form_tests';
  info: {
    displayName: 'FormTest';
    icon: 'alien';
  };
  attributes: {
    district: Attribute.Relation<
      'form.form-test',
      'oneToOne',
      'api::district.district'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'form.form-test': FormFormTest;
    }
  }
}
