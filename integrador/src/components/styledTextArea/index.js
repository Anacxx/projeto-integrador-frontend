import React from 'react';
import { CustomTextArea, PostAreaContainer, StyledGradientButton } from './styled';
import { GradientLine } from '../gradientLine';

export const StyledTextArea = ({ value, onChange, isLoading, onPostClick, placeholder }) => {
  return (
    <PostAreaContainer>
    <CustomTextArea
        name="comment"
        rows="5"
        cols="50"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    ></CustomTextArea>
    <StyledGradientButton disabled = {isLoading} onClick={onPostClick}>Postar</StyledGradientButton>
    <GradientLine/>
    </PostAreaContainer>
  );
};

