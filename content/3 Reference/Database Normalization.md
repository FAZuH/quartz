---
{"publish":true,"created":"2025-07-24T11:50:56.293+07:00","modified":"2025-07-24T11:50:56.294+07:00","published":"2025-07-24T11:50:56.294+07:00","cssclasses":"","creation-time":"2025-02-28 16:51","status":"adult","tags":null,"parent":["[[database]]"]}
---


Definitions:

- **Multi-valued Dependency**:
    - When an attribute has a specific  of available values
    - $\text{Model}\twoheadrightarrow\text{Color}$: Each model has possible color

- **Attribute**: Column/variable of a database table

- **Normal Form (NF)**:
    - Rules to **prevent bad database** design (not normalized), causing data integrity failure
    - Prevent redundancy, contradiction, and anomalies (insertion, update, deletion)
    - Makes databases easier to understand, enhance, extend

## 1 NF

1. Don't use **row order to convey information**.
2. Don't **mix data types** within the same column.
3. Don't have a table without a [[3 Reference/Working with Multiple Tables#Primary key\|primary key]]/[[3 Reference/Working with Multiple Tables#Foreign key\|foreign key]].
4. Don't have **repeating groups**.
5. Don't hold **more than 1 value** in 1 cell.

## 2 NF

Each non-key column attribute must **depend on the entire primary key**

If not 2NF: Vulnerable to **deletion, update, insertion anomaly**

- ✅: $\text{Player\_ID}, \text{Item\_Type}\to\text{Item\_Quantity}$ 
- ❌: $\text{Player\_ID}, \textcolor{yellow}{\text{Item\_Type}}\to\textcolor{yellow}{\text{Player\_Rating}}$
	
	$\text{Item\_Type}$ is treated as a key, yet $\text{Player\_Rating}$ is independent of it.

## 3 NF (Boyce-Codd Normal Form)

Every attribute in a table should **depend on the key, the whole key, and nothing but the key**

If not 3NF: Vulnerable to **update anomaly**

- ❌ $\text{Player\_ID}\to \textcolor{yellow}{\text{Player\_Skill\_Level}}\to \textcolor{lime}{\text{Player\_Rating}}$

	$\textcolor{yellow}{\text{Player\_Skill\_Level}}$ is not a key, yet $\textcolor{lime}{\text{Player\_Rating}}$ depends on it.
	
	Update anomaly occurs when $\textcolor{yellow}{\text{Player\_Skill\_Level}}$ is updated, yet for some reason $\textcolor{lime}{\text{Player\_Rating}}$ is not updated, causing inconsistensy.

	![[Assets/Pasted image 20250326164032.png|300]]

- ✅
  $\text{Player\_ID}\to\textcolor{yellow}{\text{Player\_Skill\_Level}}$
  $\textcolor{yellow}{\text{Player\_Skill\_Level}}\to\textcolor{lime}{\text{Player\_Rating}}$

## 4 NF
#TODO

Multi-valued dependencies in a table must be multi-valued dependencies on the key

- For example, table of: $\text{Model}\to\text{Color},\text{Style}$
  The table above violates 4 NF, because key is all $\text{Model, Color, Style}$?Solution is separate to two tables, $\text{Model}\twoheadrightarrow\text{Color}$, $\text{Model}\twoheadrightarrow\text{Style}$

## 5 NF

The table (which must be 4 NF) cannot be describable as the logical result of joining some other tables together.

- References table $\text{Brand}\to\text{Flavor}$ 
- ❌: table $\text{Person}\to\set{\text{Brand, Flavor}}$
- ✅: table $\text{Person}\to\text{Brand}$    &    table $\text{Person}\to\text{Flavor}$

## References

- https://www.youtube.com/watch?v=GFQaEYEc8_8 
