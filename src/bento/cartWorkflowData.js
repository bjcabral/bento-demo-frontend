import gql from 'graphql-tag';

export const navBarCartData = {
  cartLabel: 'MY CASES',
  cartLink: '/myCases',
  cartIcon: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/bento-142/src/assets/icons/Icon-MyCases.svg',
  cartIconAlt: 'cart_logo',
};

export const myCasesPageData = {
  myCasesMainTitle: 'My Cases :',
  myCasesSubTitle: 'Cases',
  buttonText: 'GO TO FILES',
  buttonLink: '/mycasesfiles',
  headerIconSrc: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/bento-142/src/assets/icons/Icon-MyCases.svg',
  headerIconAlt: 'Bento MyCases header logo',
  wizardIconSrc: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/icons/MyCases-Wizard-Step2.svg',
  wizardIconAlt: 'Bento MyCases Wizard',
};

export const myFilesPageData = {
  mainTitle: 'My Files :',
  subTitle: 'Files',
  buttonText: 'DOWNLOAD MANIFEST',
  headerIconSrc: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/bento-142/src/assets/icons/Icon-MyCases.svg',
  headerIconAlt: 'Bento MyFiles header logo',
  wizardIconSrc: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/icons/MyCases-Wizard-Step3.svg',
  wizardIconAlt: 'Bento MyFiles Wizard',
  manifestFileName: 'BENTO File Manifest',
};

export const cartSelectionMessages = {
  selectionsAddedMessage: 'Case(s) successfully added to the My Cases list',
  selectionsRemovedMessage: 'Case(s) successfully removed from the My Cases list',
};

export const GET_MY_CASES_DATA_QUERY = gql`
query subjectsInList($subject_ids: [String!]!) {

  subjectsInList(subject_ids: $subject_ids) {
    subject_id
    program
    study_acronym
    diagnosis
    recurrence_score
    tumor_size
    er_status
    pr_status
    age_at_index
    survival_time
    survival_time_unit
}
filesOfSubjects(subject_ids: $subject_ids) {
   subject_id
    file_description
    file_format
    file_name
    file_size
    file_type
    association
    file_id
    md5sum
}

}`;
