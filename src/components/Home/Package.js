import React from 'react';
import {withRouter} from 'react-router-dom'
import {Form, Slider} from 'antd';

const FormItem = Form.Item;

const Package = (props) => {
    const formItemLayout = {
        labelCol: {
            xl: {span: 8},
            lg: {span: 8},
            md: {span: 8},
            sm: {span: 8},
            xs: {span: 24},
        },
        wrapperCol: {
            xl: {span: 14},
            lg: {span: 14},
            md: {span: 14},
            sm: {span: 18},
            xs: {span: 24},
        },
        labelAlign: 'left',
        colon: false,
    };

    const {getFieldDecorator, validateFields, setFieldsValue} = props.form;


    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                console.log(values)
            }
        });
    };

    const handleReset = e => {
        e.preventDefault();
        props.history.push('/');
    };


    return (
        <React.Fragment>
                    <Form
                        onSubmit={handleSubmit}
                        onReset={handleReset}
                        className="currency-add-form"
                        layout="horizontal"
                        colon={false}
                    >
                        <FormItem
                            className="not-required-label"
                            {...formItemLayout}
                            label={'Culture'}
                        >
                            {getFieldDecorator('culture', {})(
                                <Slider defaultValue={30} className={'w-100'}/>
                            )}
                        </FormItem>

                        <FormItem
                            className="not-required-label"
                            {...formItemLayout}
                            label={'Food'}
                        >
                            {getFieldDecorator('food', {})(
                                <Slider defaultValue={30} className={'w-100'}/>
                            )}
                        </FormItem>

                        <FormItem
                            className="not-required-label"
                            {...formItemLayout}
                            label={'Nightlife'}
                        >
                            {getFieldDecorator('nightlife', {})(
                                <Slider defaultValue={30} className={'w-100'}/>
                            )}
                        </FormItem>

                        <FormItem
                            className="not-required-label"
                            {...formItemLayout}
                            label={'Historical'}
                        >
                            {getFieldDecorator('historical', {})(
                                <Slider defaultValue={30} className={'w-100'}/>
                            )}
                        </FormItem>

                        <FormItem
                            className="not-required-label"
                            {...formItemLayout}
                            label={'Nature'}
                        >
                            {getFieldDecorator('nature', {})(
                                <Slider defaultValue={30} className={'w-100'}/>
                            )}
                        </FormItem>

                        <FormItem
                            className="not-required-label"
                            {...formItemLayout}
                            label={'Mountains'}
                        >
                            {getFieldDecorator('mountains', {})(
                                <Slider defaultValue={30} className={'w-100'}/>
                            )}
                        </FormItem>

                        <FormItem
                            className="not-required-label"
                            {...formItemLayout}
                            label={'Wildlife'}
                        >
                            {getFieldDecorator('wildlife', {})(
                                <Slider defaultValue={30} className={'w-100'}/>
                            )}
                        </FormItem>

                        <FormItem
                            className="not-required-label"
                            {...formItemLayout}
                            label={'Entertainment'}
                        >
                            {getFieldDecorator('entertainment', {})(
                                <Slider defaultValue={30} className={'w-100'}/>
                            )}
                        </FormItem>
                    </Form>
        </React.Fragment>
    );
};

export default Form.create()(withRouter(Package));