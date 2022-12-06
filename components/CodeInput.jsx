import React, {forwardRef, useCallback} from 'react';
import {FormField} from '@sanity/base/components';
import {TextInput} from '@sanity/ui';
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/mode-javascript';


const CodeInput = forwardRef((props, ref) => {
    const {
        type,
        value,
        readOnly,
        placeholder,
        markers,
        presence,
        compareValue,
        onFocus,
        onBlur,
        onChange,
    } = props;

    const codeChange = useCallback((code) => {
        onChange(PatchEvent.from(code ? set(code) : unset()));
    }, [onChange]);
    return (
        <FormField
            description={type.description}
            title={type.title}
            __unstable_markers={markers}
            __unstable_presence={presence}
        >
            <AceEditor 
                ref={ref}
                mode='javascript'
                value={value}
                name='ace-editor-code'
                width='100%'
                theme='github'
                style={{
                    boxShadow: '0 0 0 1px #cad1dc',
                    lineHeight: 1.6
                }}
                tabSize={2}
                setOptions={{
                    useWorker: false,
                }}
                onChange={codeChange}
            />
        </FormField>
    )
})

export default CodeInput;