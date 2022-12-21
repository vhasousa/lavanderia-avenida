import styled from 'styled-components'

export const ServicesPriceContainer = styled.section`
  margin: 7rem auto 8rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 32rem;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 17.5rem;
  }

  /* @media (min-width: 768px) and (max-width: 1279px) {
  }

  @media (min-width: 1280px) {
  } */
`

export const SearchFormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;

    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['black-50']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['primary-color']};
    color: ${(props) => props.theme['primary-color']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['primary-color']};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    button {
      span {
        display: none;
      }
    }
  }
`

export const ServicePriceTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  margin: 0 auto;
  width: 100%;

  th {
    text-align: left;
    color: ${(props) => props.theme['black-50']};
  }

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['primary-color-20']};
    color: ${(props) => props.theme['primary-shade-1']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:nth-child(2) {
      padding-left: 0;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  div {
    background: ${(props) => props.theme.white};
    padding: 0.5rem;
    line-height: 0;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    transition: 0.2s;

    &:hover {
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
    }

    svg {
      color: ${(props) => props.theme['primary-shade-1']};
    }
  }
`
