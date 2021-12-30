React PDF Table Generator
--
## 🏁 Getting Started
<code>react-pdf-table</code> is super simple table generator for **@react-pdf/renderer** 

## ✔️ Install
```shell
npm install react-pdf-table --save
```

## 📒Usage
This package has only 2 main component for creating table.  These are
<code>TableRow</code> and <code>TableCell</code>.

### Import
```js
import ReactPdfTable from "react-pdf-table";
```

### Create Simple Row
Any number of cells can be created in a row. 
```js
	...
	<ReactPdfTable.TableRow>
		<ReactPdfTable.TableCell  text="Cell 1"  align="right" />
		<ReactPdfTable.TableCell  text="Cell 1"  align="center" />
		<ReactPdfTable.TableCell  text="Cell 1"  align="left" />
	</ReactPdfTable.TableRow>
	...
```
Actually, that's all. Also <code>react-pdf-table</code> is supporting nested tables.

## Nested Table
```jsx
<ReactPdfTable.TableRow>
	<ReactPdfTable.TableRow width={70} disableMargin={true}>
		<ReactPdfTable.TableCell text="1" align="center" width={57}  />
		<ReactPdfTable.TableCell text="2" align="center" />
		<ReactPdfTable.TableCell text="3" align="right" />
	</ReactPdfTable.TableRow>
<ReactPdfTable.TableCell text="Name1" align="center"  />
<ReactPdfTable.TableCell text="Name2" align="right"  />
<ReactPdfTable.TableCell text="Name3" align="right"  />
</ReactPdfTable.TableRow>
```

//Rest of document will be ready ASAP.
> Written with [StackEdit](https://stackedit.io/).