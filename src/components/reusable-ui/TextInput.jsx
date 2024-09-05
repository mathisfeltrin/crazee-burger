import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ value, onChange, Icon, ...otherProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...otherProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  max-width: 18px 0; // could be handle in Parent too
  /* white-space: nowrap; */

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin-right: ${theme.spacing.xs};
    color: ${theme.colors.greySemiDark};
    /* min-width: 1em; // that way, the icon size is NOT affected */
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;
    /* display: flex; */

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
