import React from 'react';

export function renderField(field) {
  return(
    <div>
    	<label htmlFor={field.name}>
    		{field.label}
    	</label>
      <input
        type={field.type}
        className="form-control mt-0 mb-2 "
        aria-label={field.aria}
        {...field.input}
      />
    </div>
  )
}

export function renderSelectField(field) {
	return (
		<div>
			<div>
				<label htmlFor={field.name}>{ field.label }</label>
			</div>
			<select className="form-control mt-0 mb-2" name="{ field.name }" { ...field.input } >
				{ field.children }
			</select>
		</div>
	)
}
