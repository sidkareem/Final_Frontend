/** @jsx jsx */
import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import {jsx} from '@emotion/core';
import Button from '@material-ui/core/Button';

import Select from 'react-select';
import {defaultTheme} from 'react-select';

const options = [
  {value: '1', label: 'SST'},
  {value: '2', label: 'IDH'},
  {value: '3', label: 'RAK_ARABIC'},
  {value: '4', label: 'DARWIN_TEST'},
  {value: '5', label: 'DARWIN63'},
  {value: '6', label: 'EMPSALPLAN'},
  {value: '7', label: 'DARWIN63R2'},
  {value: '8', label: 'D63_DEMO_HUNTER'},
  {value: '9', label: 'DARWIN63R2'},
];

const {colors} = defaultTheme;

const selectStyles = {
  control: (provided) => ({...provided, width: 240, margin: 2}),
  menu: () => ({boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)'}),
};

class Main extends Component {
  state = {isOpen: false, value: undefined};
  toggleOpen = () => {
    this.setState((state) => ({isOpen: !state.isOpen}));
  };
  onSelectChange = (value) => {
    this.toggleOpen();
    this.setState({value});
  };
  render() {
    const {isOpen, value} = this.state;
    return (
      <Dropdown
        isOpen={isOpen}
        onClose={this.toggleOpen}
        classN
        target={
          <Button
            style={{width: '100%'}}
            iconAfter={<ChevronDown />}
            onClick={this.toggleOpen}
            isSelected={isOpen}>
            <ChevronDown />
            {value ? `Environement: ${value.label}` : 'Select an Environment'}
          </Button>
        }>
        <Select
          autoFocus
          backspaceRemovesValue={false}
          components={{DropdownIndicator, IndicatorSeparator: null}}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
          menuIsOpen
          onChange={this.onSelectChange}
          options={options}
          placeholder='Search...'
          styles={selectStyles}
          tabSelectsValue={false}
          value={value}
        />
      </Dropdown>
    );
  }
}

// styled components

const Menu = (props) => {
  const shadow = 'hsla(218, 50%, 10%, 0.1)';
  return (
    <div
      css={{
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
        marginTop: 8,
        position: 'absolute',
        zIndex: 2,
      }}
      {...props}
    />
  );
};
const Blanket = (props) => (
  <div
    css={{
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: 'fixed',
      zIndex: 1,
    }}
    {...props}
  />
);
const Dropdown = ({children, isOpen, target, onClose}) => (
  <div css={{position: 'relative'}}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </div>
);
const Svg = (p) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    focusable='false'
    role='presentation'
    {...p}
  />
);
const DropdownIndicator = () => (
  <div css={{color: colors.neutral20, height: 24, width: '100%'}}>
    <Svg>
      <path
        d='M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </Svg>
  </div>
);
const ChevronDown = () => (
  <Svg style={{marginRight: -6}}>
    <path
      d='M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z'
      fill='currentColor'
      fillRule='evenodd'
    />
  </Svg>
);

export default Main;
