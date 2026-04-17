+++
description = "An account-ledger publication. Double-entry for the general reader."
template = "index"
+++

<h1>Balance Sheet</h1>
<div class="page-meta">
  <span><b>As of:</b> 17 APR 2026</span>
  <span><b>Closing Period:</b> Q2 MMXXVI</span>
  <span><b>Status:</b> <b style="color:var(--green);">Reconciled</b></span>
</div>

<h2 data-acct="100">The Opening Entry</h2>

Ledger Book is an experiment in writing economic non-fiction in the form of a double-entry accounts ledger. Every article is posted as a journal entry: titled, numbered, dated, and filed against a notional account. The publication does not balance its books in any literal sense &#8212; it does not claim to &#8212; but it uses the grammar of the ledger as a method of thinking.

The present folio contains postings for the first quarter. Selected entries follow.

<h2 data-acct="110">Recent Postings</h2>

<div class="entry-list">
  <a class="entry-card" href="{{ base_url }}/entries/the-trial-balance/">
    <div class="entry-card-acct">ACC 410 / REF 2026-0417</div>
    <div class="entry-card-title">The Trial Balance</div>
    <div class="entry-card-body">Why every ledger, at the close of the quarter, must reconcile to zero &#8212; and the small shocks that follow when it fails.</div>
    <div class="entry-card-date">POSTED 2026-04-11</div>
  </a>
  <a class="entry-card" href="{{ base_url }}/entries/accrual-basis/">
    <div class="entry-card-acct">ACC 420 / REF 2026-0412</div>
    <div class="entry-card-title">Accrual Basis</div>
    <div class="entry-card-body">On recognising income when it is earned, not when it is paid, and the moral consequences of the distinction.</div>
    <div class="entry-card-date">POSTED 2026-04-03</div>
  </a>
  <a class="entry-card" href="{{ base_url }}/entries/the-t-account/">
    <div class="entry-card-acct">ACC 405 / REF 2026-0388</div>
    <div class="entry-card-title">The T-Account</div>
    <div class="entry-card-body">A diagram so simple that generations of apprentice clerks have learned the entire craft of double-entry from it.</div>
    <div class="entry-card-date">POSTED 2026-03-26</div>
  </a>
  <a class="entry-card" href="{{ base_url }}/entries/sundries/">
    <div class="entry-card-acct">ACC 480 / REF 2026-0342</div>
    <div class="entry-card-title">Sundries</div>
    <div class="entry-card-body">On the line that appears at the bottom of every ledger, and what it is honest to admit to oneself about what goes there.</div>
    <div class="entry-card-date">POSTED 2026-03-18</div>
  </a>
</div>

<h2 data-acct="200">Summary of Accounts</h2>

<table class="entry-table">
  <thead>
    <tr>
      <th>Account</th>
      <th>Title</th>
      <th class="num">Debits</th>
      <th class="num">Credits</th>
      <th class="num">Balance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>100</td>
      <td>Opening Capital</td>
      <td class="num debit">&#8212;</td>
      <td class="num credit">10,000.00</td>
      <td class="num">10,000.00</td>
    </tr>
    <tr>
      <td>405</td>
      <td>Articles &#183; Theoretical</td>
      <td class="num debit">1,240.00</td>
      <td class="num credit">&#8212;</td>
      <td class="num">1,240.00</td>
    </tr>
    <tr>
      <td>410</td>
      <td>Articles &#183; Practical</td>
      <td class="num debit">980.00</td>
      <td class="num credit">&#8212;</td>
      <td class="num">980.00</td>
    </tr>
    <tr>
      <td>420</td>
      <td>Articles &#183; Ethical</td>
      <td class="num debit">730.00</td>
      <td class="num credit">&#8212;</td>
      <td class="num">730.00</td>
    </tr>
    <tr>
      <td>480</td>
      <td>Sundries &amp; Suspense</td>
      <td class="num debit">212.50</td>
      <td class="num credit">&#8212;</td>
      <td class="num">212.50</td>
    </tr>
    <tr>
      <td>900</td>
      <td>Reader Subscriptions</td>
      <td class="num debit">&#8212;</td>
      <td class="num credit">3,162.50</td>
      <td class="num">3,162.50</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Totals</td>
      <td class="num">3,162.50</td>
      <td class="num">13,162.50</td>
      <td class="num">&#8212;</td>
    </tr>
  </tfoot>
</table>

<h2 data-acct="300">Chart of Accounts</h2>

<p>All active account classifications. Select a classification to restrict the journal to the postings bearing that reference.</p>

<div class="register">
<ul>
  <li><a href="{{ base_url }}/tags/theoretical/">Theoretical</a></li>
  <li><a href="{{ base_url }}/tags/practical/">Practical</a></li>
  <li><a href="{{ base_url }}/tags/ethical/">Ethical</a></li>
  <li><a href="{{ base_url }}/tags/method/">Method</a></li>
  <li><a href="{{ base_url }}/tags/history/">History</a></li>
  <li><a href="{{ base_url }}/tags/audit/">Audit</a></li>
</ul>
</div>
